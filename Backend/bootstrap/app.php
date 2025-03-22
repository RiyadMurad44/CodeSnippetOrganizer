<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Http;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
        $exceptions->reportable(function (\Throwable $e) {
            sendSlackNotification($e);
        });
    })->create();



function sendSlackNotification(\Throwable $exception)
{
    $slackWebhookUrl = env('SLACK_WEBHOOK_URL');
    $slackChannel = env('SLACK_CHANNEL', '#slack-test');

    if (!$slackWebhookUrl) {
        Log::warning("SLACK_WEBHOOK_URL is not set in .env");
        return;
    }

    $message = sprintf(
        "*Exception Alert! 🚨*\n*Class:* `%s`\n*File:* `%s`\n*Line:* `%d`\n*Message:* ```%s```",
        get_class($exception),
        $exception->getFile(),
        $exception->getLine(),
        $exception->getMessage()
    );

    try {
        Http::post($slackWebhookUrl, [
            'channel' => $slackChannel,
            'text' => $message,
            'username' => 'LaravelBot',
            'icon_emoji' => ':warning:',
        ]);
    } catch (\Throwable $e) {
        Log::error("Failed to send Slack notification: " . $e->getMessage());
    }
}
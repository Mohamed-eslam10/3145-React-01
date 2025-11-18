import React from 'react';

const ErrorComponent = ({
    message = 'Something went wrong',
    color = '#ef4444',
    onRetry
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100 min-w-[280px] max-w-[400px] mx-auto">
            {/* Animated Icon Container */}
            <div className="relative mb-4">
                {/* Outer Pulse Ring */}
                <div
                    className="absolute inset-0 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: color }}
                ></div>

                {/* Main Icon Container */}
                <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: color }}
                >
                    {/* X Icon */}
                    <svg
                        className="w-8 h-8 text-white animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                    {/* Inner Shine Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                </div>
            </div>

            {/* Error Message */}
            <div className="text-center mb-6">
                <h3
                    className="text-lg font-semibold mb-2"
                    style={{ color }}
                >
                    Oops!
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {message}
                </p>
            </div>

            {/* Retry Button */}
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-6 py-3 rounded-xl font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                        backgroundColor: color,
                        focusRingColor: color
                    }}
                >
                    Try Again
                </button>
            )}
        </div>
    );
};

export default ErrorComponent;
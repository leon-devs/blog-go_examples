import {useQuery} from '@tanstack/react-query';
import {CheckCircle, Wifi, WifiOff} from 'lucide-react';

const BackendStatus = () => {
    const backendUrl = import.meta.env.VITE_BACKEND_PING_URL || 'http://localhost:8080/ping';

    const {data: status, isLoading, error} = useQuery({
        queryKey: ['backend-status'],
        queryFn: async () => {
            try {
                const response = await fetch(backendUrl, {
                    method: 'GET',
                    mode: 'cors',
                });
                return {
                    status: response.status,
                    ok: response.ok,
                    message: response.ok ? 'Backend is alive' : `Backend returned ${response.status}`
                };
            } catch (err) {
                console.log('Backend ping failed:', err);
                throw new Error('Backend is unreachable');
            }
        },
        refetchInterval: 2000, // Check every 2 seconds
        retry: false,
    });

    const isOnline = status?.ok;
    const statusMessage = error ? 'Backend is down' : status?.message || 'Checking...';

    return (
        <div className="w-full max-w-sm">
            <div
                className="flex flex-col items-center space-y-6 p-8 border border-border rounded-xl bg-card/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                    {isLoading ? (
                        <Wifi className="w-8 h-8 text-muted-foreground animate-pulse"/>
                    ) : isOnline ? (
                        <CheckCircle className="w-8 h-8 text-green-500"/>
                    ) : (
                        <WifiOff className="w-8 h-8 text-red-500"/>
                    )}
                    <span className="text-lg font-semibold text-green-400">Backend Status</span>
                </div>

                <div className={`text-base px-6 py-3 rounded-full font-medium ${
                    isLoading
                        ? 'bg-gray-500/20 text-gray-400'
                        : isOnline
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                }`}>
                    {statusMessage}
                </div>

                {status?.status && (
                    <div className="text-sm text-muted-foreground">
                        Status Code: <span className="font-mono text-green-400">{status.status}</span>
                    </div>
                )}

                <div className="text-xs text-muted-foreground text-center">
                    Checking every 2 seconds
                </div>
            </div>
        </div>
    );
};

export default BackendStatus;

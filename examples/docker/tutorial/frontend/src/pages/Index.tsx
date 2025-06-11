import {AlertTriangle, Code, Coffee, Skull} from 'lucide-react';
import DecisionDropdown from '@/components/DecisionDropdown';
import BackendStatus from '@/components/BackendStatus';

const Index = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left column - Main content */}
            <div className="flex-1 flex flex-col px-6 py-4">
                {/* Header with dramatic announcement */}
                <header className="text-center py-6">
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            <AlertTriangle className="w-16 h-16 text-red-500 animate-pulse"/>
                            <Skull className="w-6 h-6 text-red-400 absolute -top-1 -right-1"/>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dramatic-text text-glow">
                        CONGRATULATIONS!
                    </h1>

                    <div className="max-w-3xl mx-auto space-y-2">
                        <p className="text-lg md:text-xl text-green-400 font-medium">
                            You just realized that joining this company
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-red-400 text-glow animate-pulse">
                            WAS A HUGE MISTAKE
                        </p>
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 flex flex-col items-center justify-center space-y-8">
                    {/* Tragic story section */}
                    <div className="max-w-2xl text-center space-y-4">
                        <div className="flex justify-center space-x-3 mb-4">
                            <Code className="w-6 h-6 text-green-400"/>
                            <Coffee className="w-6 h-6 text-yellow-400"/>
                            <AlertTriangle className="w-6 h-6 text-red-400"/>
                        </div>

                        <h2 className="text-xl md:text-2xl font-semibold text-green-400 mb-3">
                            The Developer's Nightmare
                        </h2>

                        <div className="text-base text-foreground space-y-3">
                            <p>
                                You left an <span className="text-green-400 font-semibold">incredible job</span> for
                                what seemed like a better opportunity.
                            </p>
                            <p>
                                First day excitement turned into horror when you opened their website and discovered...
                            </p>
                            <p className="text-lg text-red-400 font-bold">
                                Their product is absolute garbage! 🗑️
                            </p>
                        </div>
                    </div>

                    {/* Decision dropdown */}
                    <DecisionDropdown/>
                </main>

                {/* Footer */}
                <footer className="text-center py-4 text-xs text-muted-foreground">
                    <p>
                        Based on true events that happen to developers worldwide 😭
                    </p>
                    <p className="mt-1">
                        Remember: Always check their product before signing that contract!
                    </p>
                </footer>
            </div>

            {/* Right column - Backend status */}
            <div className="w-80 bg-card border-l border-border p-8 flex items-center justify-center">
                <BackendStatus/>
            </div>
        </div>
    );
};

export default Index;

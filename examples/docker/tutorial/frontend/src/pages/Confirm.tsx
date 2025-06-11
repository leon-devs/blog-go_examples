import {Link, useLocation} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Heart, Home} from 'lucide-react';

const Confirm = () => {
    const location = useLocation();
    const decision = location.state?.decision;

    const getDecisionText = (decision: string) => {
        switch (decision) {
            case 'beg':
                return 'You chose to beg for your old job back';
            case 'suck-it-up':
                return "You chose to suck it up like an adult";
            case 'quit':
                return 'You chose to quit and start fresh';
            default:
                return 'You made a decision';
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
            <div className="max-w-4xl text-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-6xl md:text-8xl font-bold dramatic-text text-glow animate-fade-in">
                        THIS TOO SHALL PASS
                    </h1>

                    <div className="text-xl md:text-2xl text-green-300 animate-fade-in delay-300">
                        {getDecisionText(decision)}
                    </div>
                </div>

                <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in delay-500">
                    <p>
                        Life is full of unexpected turns, career missteps, and moments that make us question our
                        choices.
                    </p>
                    <p>
                        But here's the thing: <span className="text-green-400 font-semibold">you are responsible for your decisions</span>.
                    </p>
                    <p>
                        Own them. Learn from them. And remember that even the worst job experiences teach us something
                        valuable about what we truly want.
                    </p>
                    <p className="text-green-300 font-medium">
                        This moment of realization? It's not the end. It's the beginning of your comeback story.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Link to="/">
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                            <Home className="w-4 h-4 mr-2"/>
                            Back to Reality
                        </Button>
                    </Link>

                    <div className="flex items-center text-sm text-muted-foreground">
                        <Heart className="w-4 h-4 mr-1 text-red-400"/>
                        Made with dark humor for developers
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confirm;

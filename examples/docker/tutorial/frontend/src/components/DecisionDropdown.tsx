import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {ArrowRight} from 'lucide-react';

const DecisionDropdown = () => {
    const [selectedDecision, setSelectedDecision] = useState<string>('');
    const navigate = useNavigate();

    const decisions = [
        {
            value: 'beg',
            label: 'Beg my previous boss to take me back'
        },
        {
            value: 'suck-it-up',
            label: "Suck it up. I'm a big boy/girl"
        },
        {
            value: 'quit',
            label: 'Quit and start a completely different business'
        }
    ];

    const handleConfirm = () => {
        if (selectedDecision) {
            navigate('/confirm', {state: {decision: selectedDecision}});
        }
    };

    return (
        <div
            className="flex flex-col items-center space-y-4 p-6 border border-border rounded-xl bg-card/30 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-center text-green-400">
                What are you going to do now?
            </h3>

            <div className="w-full max-w-md">
                <Select value={selectedDecision} onValueChange={setSelectedDecision}>
                    <SelectTrigger className="w-full bg-background/50 border-green-400/30 text-foreground">
                        <SelectValue placeholder="Choose your path..."/>
                    </SelectTrigger>
                    <SelectContent className="bg-background border-green-400/30">
                        {decisions.map((decision) => (
                            <SelectItem
                                key={decision.value}
                                value={decision.value}
                                className="hover:bg-green-400/10 focus:bg-green-400/10"
                            >
                                {decision.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <Button
                onClick={handleConfirm}
                disabled={!selectedDecision}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
                Confirm Decision <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
        </div>
    );
};

export default DecisionDropdown;

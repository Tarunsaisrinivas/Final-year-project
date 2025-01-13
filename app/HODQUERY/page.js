'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Star, Scissors, Briefcase, ShirtIcon as TShirt, ChevronRight, ThumbsUp } from 'lucide-react';
import { toast } from 'sonner';

function QAPage() {
  const [activeTab, setActiveTab] = useState('qa');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [selectedPollOption, setSelectedPollOption] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, text: 'Namaste', author: 'Anonymous', timestamp: '5 minutes ago', votes: 1, hasVoted: false },
    { id: 2, text: 'Hello', author: 'Anonymous', timestamp: '5 minutes ago', votes: 0, hasVoted: false },
    { id: 3, text: 'Yes', author: 'Anonymous', timestamp: '3 minutes ago', votes: 0, hasVoted: false },
  ]);
  const [pollOptions, setPollOptions] = useState([
    { id: 'hello', text: 'hello', votes: 0 },
    { id: 'namaste', text: 'namaste', votes: 0 }
  ]);
  const [hasVoted, setHasVoted] = useState(false);

  const handleQuestionSubmit = () => {
    if (!question.trim()) {
      toast.error('Please enter a question');
      return;
    }

    const newQuestion = {
      id: questions.length + 1,
      text: question,
      author: name || 'Anonymous',
      timestamp: 'Just now',
      votes: 0,
      hasVoted: false
    };

    setQuestions([newQuestion, ...questions]);
    setQuestion('');
    setName('');
    toast.success('Question submitted successfully!');
  };

  const handleVote = (questionId) => {
    setQuestions(questions.map(q => {
      if (q.id === questionId) {
        if (q.hasVoted) {
          return { ...q, votes: q.votes - 1, hasVoted: false };
        } else {
          return { ...q, votes: q.votes + 1, hasVoted: true };
        }
      }
      return q;
    }));
  };

  const handlePollSubmit = () => {
    if (!selectedPollOption) {
      toast.error('Please select an option');
      return;
    }

    setPollOptions(pollOptions.map(option => {
      if (option.id === selectedPollOption) {
        return { ...option, votes: option.votes + 1 };
      }
      return option;
    }));
    setHasVoted(true);
    toast.success('Vote submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-background text-gray-800">
      <div className="max-w-3xl mx-auto p-4">
        <Tabs defaultValue="qa" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 bg-boxbackground">
            <TabsTrigger 
              value="qa"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-textcolor1 rounded-none"
            >
              Q&A
            </TabsTrigger>
            <TabsTrigger 
              value="polls"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-textcolor1 rounded-none"
            >
              Polls
            </TabsTrigger>
          </TabsList>

          <TabsContent value="qa" className="mt-6">
            <div className="space-y-4">
              <div className="bg-boxbackground rounded-lg p-4 shadow">
                <Textarea
                  placeholder="Type your question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="bg-white border-textcolor1 resize-none mb-2"
                  maxLength={160}
                />
                <div className="text-right text-sm text-textcolor2 mb-2">
                  {question.length}/160
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-textcolor1 overflow-x-auto">
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Star className="w-4 h-4" /> Improve
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Scissors className="w-4 h-4" /> Shorten
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <Briefcase className="w-4 h-4" /> Professional
                  </span>
                  <span className="flex items-center gap-1 whitespace-nowrap">
                    <TShirt className="w-4 h-4" /> Casual
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <div className="flex justify-between items-center">
                  <Input
                    placeholder="Your name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="max-w-[200px] bg-boxbackgorund border-textcolor1"
                  />
                  <Button 
                    className="bg-buttonbg hover:bg-buttonbg/80 text-white"
                    onClick={handleQuestionSubmit}
                  >
                    Send
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 text-sm border-b border-textcolor1 pb-2">
                <button className="text-textcolor1 font-medium">Popular</button>
                <button className="text-gray-600">Recent</button>
                <div className="ml-auto text-textcolor1">{questions.length} questions</div>
              </div>

              <div className="space-y-4">
                {questions.map((q) => (
                  <div key={q.id} className="bg-gray-100 rounded-lg p-4 shadow">
                    <div className="flex items-center gap-2 text-sm text-textcolor1 mb-2">
                      <span>{q.author}</span>
                      <span>•</span>
                      <span>{q.timestamp}</span>
                    </div>
                    <p className="mb-2 text-textcolor1">{q.text}</p>
                    <button 
                      onClick={() => handleVote(q.id)}
                      className={`flex items-center gap-1 text-sm transition-colors ${
                        q.hasVoted ? 'text-green-600' : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      <ThumbsUp className={`w-4 h-4 ${q.hasVoted ? 'fill-green-600' : ''}`} />
                      <span>{q.votes}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="polls" className="mt-6">
            <div className="bg-gray-100 rounded-lg p-4 shadow">
              {!hasVoted ? (
                <>
                  <h3 className="text-center mb-4 text-gray-800">Select options from the list below.</h3>
                  <RadioGroup 
                    value={selectedPollOption} 
                    onValueChange={setSelectedPollOption}
                    className="space-y-2"
                  >
                    {pollOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label htmlFor={option.id} className="text-gray-800">{option.text}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                  <div className="mt-4 flex flex-col items-center gap-2">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={handlePollSubmit}
                    >
                      Send
                    </Button>
                    <span className="text-sm text-gray-600">Voting as Anonymous</span>
                  </div>
                </>
              ) : (
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">Thanks for voting!</h3>
                  <div className="space-y-2">
                    {pollOptions.map((option) => (
                      <div key={option.id} className="flex justify-between items-center text-gray-800">
                        <span>{option.text}</span>
                        <span>{option.votes} votes</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default QAPage;

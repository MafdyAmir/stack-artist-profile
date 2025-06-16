
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalLine {
  type: 'command' | 'output' | 'system';
  content: string;
  timestamp?: string;
}

const InteractiveTerminal = ({ className }: { className?: string }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'system', content: '$ whoami' },
    { type: 'output', content: 'Mafdy - Backend Developer' },
    { type: 'system', content: '$ ls -la skills/' },
    { type: 'output', content: 'total 8' },
    { type: 'output', content: 'drwxr-xr-x 4 mafdy staff 128 Mar 15 10:30 nodejs/' },
    { type: 'output', content: 'drwxr-xr-x 3 mafdy staff 96 Mar 15 10:30 express/' },
    { type: 'output', content: 'drwxr-xr-x 3 mafdy staff 96 Mar 15 10:30 mongodb/' },
    { type: 'system', content: '$ ./initialize.sh' },
    { type: 'output', content: 'Initializing portfolio terminal...' },
    { type: 'output', content: 'Type "help" for available commands.' }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => [
      'Available commands:',
      '',
      'about     - Learn more about me',
      'skills    - View my technical skills',
      'projects  - See my portfolio projects',
      'contact   - Get my contact information',
      'services  - Services I provide',
      'clear     - Clear terminal',
      'whoami    - Display user info',
      'ls        - List contents',
      'pwd       - Print working directory',
      ''
    ],
    about: () => [
      'Hi! I\'m Mafdy, a passionate Backend Developer.',
      'I specialize in building scalable, reliable backend systems.',
      'Currently focused on Node.js, Express.js, and MongoDB.',
      ''
    ],
    skills: () => [
      'Technical Skills:',
      '• Backend: Node.js, Express.js, MongoDB',
      '• Languages: JavaScript, TypeScript, Python',
      '• Tools: Git, Docker, AWS, Linux',
      '• Databases: MongoDB, PostgreSQL, Redis',
      '• APIs: REST, GraphQL, WebSocket',
      ''
    ],
    projects: () => [
      'Featured Projects:',
      '• E-commerce API - RESTful API with payment integration',
      '• Real-time Chat App - WebSocket-based messaging system',
      '• Task Management System - Full-stack project management tool',
      '• Authentication Service - JWT-based auth microservice',
      '',
      'Visit the Projects section to see more details!'
    ],
    contact: () => [
      'Contact Information:',
      '• Email: contact@example.com',
      '• Phone: +1 (555) 123-4567',
      '• Location: Your City, Country',
      '• LinkedIn: linkedin.com/in/yourusername',
      '• GitHub: github.com/yourusername',
      ''
    ],
    services: () => [
      'Services I Provide:',
      '',
      '🚀 Backend Development',
      '   • RESTful API design and development',
      '   • Database design and optimization',
      '   • Server architecture and deployment',
      '',
      '⚡ Performance Optimization',
      '   • Database query optimization',
      '   • Caching strategies implementation',
      '   • Load balancing and scaling',
      '',
      '🔒 Security Implementation',
      '   • Authentication and authorization',
      '   • Data encryption and validation',
      '   • Security auditing and testing',
      '',
      '🛠️ Technical Consulting',
      '   • Architecture planning and review',
      '   • Code review and best practices',
      '   • Technology stack recommendations',
      ''
    ],
    whoami: () => ['mafdy'],
    pwd: () => ['/home/mafdy/portfolio'],
    ls: () => ['about.md', 'skills/', 'projects/', 'contact.txt', 'services.json'],
    clear: () => null
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const newHistory = [...history];
    newHistory.push({ type: 'command', content: `$ ${cmd}` });

    if (commands[trimmedCmd as keyof typeof commands]) {
      const output = commands[trimmedCmd as keyof typeof commands]();
      if (output) {
        output.forEach(line => {
          newHistory.push({ type: 'output', content: line });
        });
      }
    } else if (trimmedCmd === '') {
      // Do nothing for empty command
    } else {
      newHistory.push({ 
        type: 'output', 
        content: `Command not found: ${cmd}. Type "help" for available commands.` 
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      processCommand(input);
      setInput('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={cn("bg-slate-900 text-green-400 rounded-lg border border-slate-700 overflow-hidden", className)}>
      {/* Terminal Header */}
      <div className="flex items-center gap-2 bg-slate-800 px-4 py-3 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-slate-300 text-sm ml-4">portfolio@terminal:~</span>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-4 h-80 overflow-y-auto font-mono text-sm leading-relaxed"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className={cn(
            "mb-1",
            line.type === 'command' && "text-blue-400",
            line.type === 'output' && "text-green-300",
            line.type === 'system' && "text-yellow-400"
          )}>
            {line.content}
          </div>
        ))}
        
        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-blue-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-green-400 font-mono"
            autoComplete="off"
            placeholder="Type 'help' for commands..."
          />
        </form>
      </div>
    </div>
  );
};

export default InteractiveTerminal;

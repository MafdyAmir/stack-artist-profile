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
    <div className={cn(
      "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-emerald-400 rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl backdrop-blur-sm",
      "relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-emerald-500/5 before:via-transparent before:to-blue-500/5 before:pointer-events-none",
      className
    )}>
      {/* Terminal Header */}
      <div className="flex items-center gap-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 px-5 py-4 border-b border-slate-600/30 backdrop-blur-sm">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/30 ring-1 ring-red-300/20"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-300/20"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-500/30 ring-1 ring-green-300/20"></div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-4 h-4 text-slate-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <span className="text-slate-300 text-sm font-medium tracking-wider">mafdy@portfolio</span>
          <span className="text-slate-500 text-sm">~</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="p-6 h-80 overflow-y-auto font-mono text-sm leading-relaxed custom-scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className={cn(
            "mb-1.5 transition-all duration-200",
            line.type === 'command' && "text-cyan-300 font-medium",
            line.type === 'output' && "text-emerald-300 pl-2",
            line.type === 'system' && "text-amber-300 font-medium"
          )}>
            {line.type === 'command' && (
              <span className="text-blue-400 mr-1">❯</span>
            )}
            <span className="select-text">{line.content}</span>
          </div>
        ))}
        
        {/* Current Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-blue-400 mr-2 font-bold">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-emerald-400 font-mono placeholder:text-slate-500 caret-emerald-400"
            autoComplete="off"
            placeholder="Type 'help' for commands..."
          />
          <div className="w-2 h-5 bg-emerald-400 animate-pulse ml-1"></div>
        </form>
      </div>

      {/* Terminal glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #065f46);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #34d399, #059669);
        }
      `}</style>
    </div>
  );
};

export default InteractiveTerminal;

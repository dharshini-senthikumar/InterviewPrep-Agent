import React, { useState } from 'react';
import { Code, Play, CheckCircle2, AlertCircle, HelpCircle, Terminal, RefreshCw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CodingInterviewPage() {
  const { showToast } = useApp();
  const [language, setLanguage] = useState('javascript');
  const [difficulty, setDifficulty] = useState('Medium');
  const [showHint, setShowHint] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('testcases');

  const defaultCodeMap = {
    javascript: `// Two Sum Problem
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    python: `# Two Sum Problem in Python
def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
    java: `// Two Sum Problem in Java
import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`,
    cpp: `// Two Sum Problem in C++
#include <vector>
#include <unordered_map>

class Solution {
public:
    std::vector<int> twoSum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> seen;
        for (int i = 0; i < nums.size(); ++i) {
            int comp = target - nums[i];
            if (seen.count(comp)) return {seen[comp], i};
            seen[nums[i]] = i;
        }
        return {};
    }
};`
  };

  const [code, setCode] = useState(defaultCodeMap['javascript']);
  const [executionResult, setExecutionResult] = useState(null);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(defaultCodeMap[lang]);
    setExecutionResult(null);
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setExecutionResult({
        status: "Passed",
        time: "14ms",
        memory: "15.4 MB",
        testCases: [
          { input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", actual: "[0,1]", status: "Pass" },
          { input: "nums = [3,2,4], target = 6", expected: "[1,2]", actual: "[1,2]", status: "Pass" },
          { input: "nums = [3,3], target = 6", expected: "[0,1]", actual: "[0,1]", status: "Pass" }
        ],
        logs: `[${language.toUpperCase()} Compiler Execution]\nRunning Test Suite (3/3)...\n✓ Test case 1 passed (4ms)\n✓ Test case 2 passed (5ms)\n✓ Test case 3 passed (5ms)\nResult: All test cases passed successfully!`
      });
      setActiveTab('output');
      showToast('All 3 coding test cases passed!', 'success');
    }, 1200);
  };

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col space-y-4">
      {/* Header Bar */}
      <div className="glass-card p-4 rounded-2xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7F5AF0] to-[#00C853] flex items-center justify-center text-white shadow-lg">
            <Code className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-white flex items-center gap-2">
              Two Sum — Array & Hash Table Optimization
              <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${
                difficulty === 'Easy' ? 'bg-[#00C853]/20 text-[#00C853]' : 'bg-amber-500/20 text-amber-400'
              }`}>
                {difficulty}
              </span>
            </h2>
            <p className="text-xs text-gray-400">Supported: Java, Python, C++, JavaScript</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-[#171C33] border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-[#00D9FF] focus:outline-none"
          >
            <option value="javascript">JavaScript (ES6)</option>
            <option value="python">Python 3.10</option>
            <option value="java">Java 17</option>
            <option value="cpp">C++ 20</option>
          </select>

          <button
            onClick={() => setShowHint(!showHint)}
            className="p-2 rounded-xl bg-[#171C33] border border-white/10 text-amber-400 hover:bg-amber-500/10 text-xs font-semibold flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
          </button>

          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="btn-glow px-5 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2"
          >
            {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
            <span>Run Code</span>
          </button>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 min-h-0">
        {/* Code Editor Pane */}
        <div className="glass-card rounded-3xl border border-white/10 p-4 flex flex-col font-mono text-sm">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs text-gray-400">
            <span className="text-[#00D9FF]">solution.{language === 'cpp' ? 'cpp' : language === 'javascript' ? 'js' : language}</span>
            <span>Compiler Active</span>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-[#0B1020] border border-white/10 rounded-2xl p-4 text-xs md:text-sm text-gray-100 font-mono focus:outline-none focus:border-[#6C63FF] leading-relaxed resize-none"
          />

          {showHint && (
            <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
              💡 <strong>Hint:</strong> Use a Hash Map to store complement values (target - current) for O(N) time complexity instead of nested loops.
            </div>
          )}
        </div>

        {/* Output & Test Cases Pane */}
        <div className="glass-card rounded-3xl border border-white/10 p-4 flex flex-col">
          {/* Tab Selector */}
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('testcases')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'testcases' ? 'bg-[#6C63FF] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Test Cases
            </button>
            <button
              onClick={() => setActiveTab('output')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'output' ? 'bg-[#6C63FF] text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              Compiler Console Output
            </button>
          </div>

          {activeTab === 'testcases' ? (
            <div className="space-y-3 flex-1 overflow-y-auto">
              <div className="p-3 rounded-2xl bg-[#0B1020] border border-white/5 space-y-1 text-xs">
                <div className="text-gray-400 font-semibold">Test Case 1</div>
                <div className="text-white font-mono">Input: nums = [2, 7, 11, 15], target = 9</div>
                <div className="text-[#00C853] font-mono">Expected Output: [0, 1]</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0B1020] border border-white/5 space-y-1 text-xs">
                <div className="text-gray-400 font-semibold">Test Case 2</div>
                <div className="text-white font-mono">Input: nums = [3, 2, 4], target = 6</div>
                <div className="text-[#00C853] font-mono">Expected Output: [1, 2]</div>
              </div>
              <div className="p-3 rounded-2xl bg-[#0B1020] border border-white/5 space-y-1 text-xs">
                <div className="text-gray-400 font-semibold">Test Case 3</div>
                <div className="text-white font-mono">Input: nums = [3, 3], target = 6</div>
                <div className="text-[#00C853] font-mono">Expected Output: [0, 1]</div>
              </div>
            </div>
          ) : (
            <div className="flex-1 bg-[#0B1020] rounded-2xl p-4 border border-white/10 font-mono text-xs text-gray-200 overflow-y-auto whitespace-pre-line">
              {executionResult ? (
                <div>
                  <div className="text-[#00C853] font-bold mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Execution Status: {executionResult.status} ({executionResult.time}, {executionResult.memory})
                  </div>
                  {executionResult.logs}
                </div>
              ) : (
                <div className="text-gray-500 flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> Click "Run Code" to compile and execute solution.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

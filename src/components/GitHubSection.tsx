
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Replace with your actual GitHub username
  const username = "chidrupm";
  
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=4`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
        setError("Failed to load GitHub repositories");
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, [username]);
  
  // Function to get language color
  const getLanguageColor = (language: string | null) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-300',
      TypeScript: 'bg-blue-500',
      Python: 'bg-blue-600',
      Java: 'bg-red-600',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-400',
      // Add more languages as needed
    };
    
    return language ? colors[language] || 'bg-gray-500' : 'bg-gray-300';
  };
  
  return (
    <section id="github" className="py-16 px-4 md:px-8 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my open source contributions and personal projects on GitHub.
          </p>
        </div>
        
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center text-red-500 p-4 rounded-md bg-red-50">
            <p>{error}</p>
            <p className="mt-2 text-sm">Please check the GitHub username or try again later.</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {repos.map((repo) => (
            <Card key={repo.id} className="h-full flex flex-col transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Github size={18} />
                  {repo.name}
                </CardTitle>
                <CardDescription className="line-clamp-2 h-10">
                  {repo.description || "No description available"}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                {repo.language && (
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                    <span className="text-sm">{repo.language}</span>
                  </div>
                )}
              </CardContent>
              
              <CardFooter className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-sm">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <span>View</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              <span>View All Repositories</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;

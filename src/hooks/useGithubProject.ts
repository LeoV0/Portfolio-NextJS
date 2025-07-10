import { useState, useEffect } from "react";

interface GitHubProject {
  name: string;
  description: string | null;
  html_url: string;
}

export function useGitHubProjects(username: string) {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        if (!response.ok)
          throw new Error("Erreur lors de la récupération des projets");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Une erreur est survenue"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
}

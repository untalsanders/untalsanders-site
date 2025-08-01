'use client';

import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa6'
import styles from '@/styles/About.module.css'

interface GitHubStats {
    repos: number;
    commits: number;
    issues: number;
    prs: number;
}

export default function About() {
    const [stats, setStats] = useState<GitHubStats>({
        repos: 0,
        commits: 0,
        issues: 0,
        prs: 0
    });

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch repositories
                const reposRes = await fetch('https://api.github.com/users/untalsanders/repos');
                const repos = await reposRes.json();

                // Fetch commits (limited to 100 per page)
                const commitsRes = await fetch('https://api.github.com/users/untalsanders/events/public');
                const events = await commitsRes.json();
                const commitEvents = events.filter((event: { type: string; }) => event.type === 'PushEvent') as { payload: { size: number; }; }[];
                const totalCommits = commitEvents.reduce((sum: number, event: { payload: { size: number; }; }) => sum + event.payload.size, 0);

                // Fetch issues
                const issuesRes = await fetch('https://api.github.com/search/issues?q=author:untalsanders+is:issue');
                const issues = await issuesRes.json();

                // Fetch merged PRs
                const prsRes = await fetch('https://api.github.com/search/issues?q=author:untalsanders+is:pr+is:merged');
                const prs = await prsRes.json();

                setStats({
                    repos: repos.length,
                    commits: totalCommits,
                    issues: issues.total_count,
                    prs: prs.total_count
                });
            } catch (error) {
                console.error('Error fetching GitHub stats:', error);
            }
        };

        fetchGitHubStats();
    }, []);

    return (
        <div id="about" className={styles.about}>
            <div className={`container`}>
                <div className={styles.aboutHeader}>
                    <h2>
                        About <span>Me</span>
                    </h2>
                    <p>
                        Developer committed to clean, efficient, and tailored solutions. Lover of good coffee and open
                        innovation, focused on creating real value for your business.
                    </p>
                </div>
                <div className={`${styles.aboutBody}`}>
                    <picture className={styles.aboutPicture}>
                        <img src="/images/profile.jpg" alt="Profile" />
                    </picture>
                    <section className={styles.aboutInfo}>
                        <section className={styles.aboutDescription}>
                            <h3>
                                <FaUser /> Who Am I?
                            </h3>
                            <p>
                                My name is Sanders and I&apos;m a professional with a strong career in Software
                                Engineering and a growing interest in Artificial Intelligence, Machine Learning and
                                Internet of Things, with a passion for Physics and Mathematics.
                            </p>
                            <p>
                                Also, I&apos;m passionate developer with more than <strong>6+ years</strong> of
                                experience building web applications with Java, Python and Node.js. When I&apos;m not
                                coding, you can find me exploring new technologies, writting tech article or enjoying a
                                fresh cup of coffee while debuggin complex problems.
                            </p>
                        </section>
                        <section className={styles.aboutStats}>
                            <div>
                                <span>{stats.repos}</span>
                                <span>Repositories</span>
                            </div>
                            <div>
                                <span>{stats.commits}</span>
                                <span>Commits</span>
                            </div>
                            <div>
                                <span>{stats.issues}</span>
                                <span>Issues</span>
                            </div>
                            <div>
                                <span>{stats.prs}</span>
                                <span>PRs Merged</span>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

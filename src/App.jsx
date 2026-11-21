import { useMemo, useState } from 'react'
import { Header } from '@/components/Header/Header'
import { Sidebar } from '@/components/Sidebar/Sidebar'
import { ProjectCard } from '@/components/ProjectCard/ProjectCard'
import { TaskList } from '@/components/TaskList/TaskList'
import { Button } from '@/components/Button/Button'
import { projects, tasks, stats } from '@/data/dashboard.json'
import { useNavigation } from '@/hooks/useNavigation'
import styles from './App.module.css'

function App() {
  const { activePage, navigate } = useNavigation()
  const [search, setSearch] = useState('')
  const [taskItems, setTaskItems] = useState(tasks)

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase())),
    [search],
  )

  const toggleTask = (taskId) => {
    setTaskItems((current) => current.map((task) => (
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )))
  }

  return (
    <div className={styles.appShell}>
      <Sidebar activePage={activePage} onNavigate={navigate} />
      <main className={styles.main}>
        <Header search={search} onSearch={setSearch} onMenu={() => navigate('dashboard')} />
        <div className={styles.content}>
          <section className={styles.welcomeRow}>
            <div>
              <p className={styles.eyebrow}>Sâmbătă, 21 noiembrie 2026</p>
              <h1>{activePage === 'dashboard' ? 'Bună, Mihai!' : activePage}</h1>
              <p className={styles.subtitle}>Iată ce se întâmplă cu proiectele tale astăzi.</p>
            </div>
            <Button onClick={() => window.alert('Proiect nou — formularul poate fi conectat aici.')}>+ Proiect nou</Button>
          </section>

          <section className={styles.statsGrid} aria-label="Statistici">
            {stats.map((stat) => <article className={styles.statCard} key={stat.label}>
              <span className={`${styles.statIcon} ${styles[stat.tone]}`}>{stat.icon}</span>
              <div><p>{stat.label}</p><strong>{stat.value}</strong></div>
              <span className={styles.statTrend}>{stat.trend}</span>
            </article>)}
          </section>

          <div className={styles.dashboardGrid}>
            <section className={styles.projectsSection}>
              <div className={styles.sectionHeading}><div><h2>Proiectele mele</h2><p>Urmărește progresul echipei.</p></div><button className={styles.linkButton} onClick={() => navigate('projects')}>Vezi toate <span>→</span></button></div>
              <div className={styles.projectGrid}>{filteredProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
              {filteredProjects.length === 0 && <p className={styles.emptyState}>Nu am găsit niciun proiect.</p>}
            </section>
            <TaskList tasks={taskItems} onToggle={toggleTask} onViewAll={() => navigate('tasks')} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

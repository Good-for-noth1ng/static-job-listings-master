import React, { useState, useEffect } from 'react';
import './scss/style.css';
import Header from './Header';
import Board from './Board';
import JobList from './JobList';
function App() {
  //init list of jobs from db, on screen and parameters list
  const [jobs, setJobs] = useState([]);
  const [jobsShownOnScreen, setJobsShownOnScreen] = useState([]);
  const [params, setParams] = useState ([
    'Frontend',
    'Senior',
    'Midweight',
    'HTML',
    'CSS',
    'JavaScript',
    'Python',
    'React',
    'Sass',
    'Junior',
    'Fullstack',
    'Ruby',
    'RoR',
    'Backend',
    'Vue',
    'Django',
  ]);
  //sends jobs from db to screen
  useEffect(() => {
    const getJobs = async () => {
      const jobsFromServer = await fetchJobs();
      setJobs(jobsFromServer);
      setJobsShownOnScreen(jobsFromServer);
    }
    getJobs();
  }, []);

  const fetchJobs = async () => {
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    return data;
  };

  
  const addSkillOnBoard = (newParam) => {
    const toAddParam = newParam.newParam;
    setParams([...params, toAddParam]);
    const isToAdd = (job) => {
      const isToAddRole = (job) => {
        return job.role === toAddParam;
      };
      const isToAddLevel = (job) => {
        return job.level === toAddParam;
      };

      const isToAddLangTool = (instruments) => {
        let count = 0;
        instruments.forEach(inst => {
          if (inst === toAddParam) {
            count++;
          }
        })
        if (count > 0) {
          return true;
        } else {
          return false;
        }
      };
      if (isToAddRole(job) || 
          isToAddLevel(job) || 
          isToAddLangTool(job.languages) || 
          isToAddLangTool(job.tools)) {
        return true;
      }
    };
    const beforeAddingParameterJobs = jobsShownOnScreen;
    const afterAddingParameterJobs = jobs.filter(job => isToAdd(job));
    const newJobsShownOnScreen = beforeAddingParameterJobs.concat(afterAddingParameterJobs);
    setJobsShownOnScreen(newJobsShownOnScreen); 
  }

  const deleteSkill = (toDeleteParam) => {
    setParams(params.filter((param) => param !== toDeleteParam));
    const isToDelete = (job) => {
      const isToDeleteRole = (job) => {
        return job.role !== toDeleteParam;
      };
      const isToDeleteLevel = (job) => {
        return job.level !== toDeleteParam;
      }
      
      const isToDeleteLangTool = (instruments) => {
        let count = 0;
        instruments.forEach(inst => {
          if (inst !== toDeleteParam) {
            count++;
          }
        })
        if (count === instruments.length) {
          return true;
        } else {
          return false;
        }
      };

      if (isToDeleteRole(job) && isToDeleteLevel(job) && isToDeleteLangTool(job.languages) && isToDeleteLangTool(job.tools)) {
       return true;
      }
    }
    setJobsShownOnScreen(jobsShownOnScreen.filter((job) => isToDelete(job)));
  }

  const clearBoard = () => {
    setParams([])
    setJobsShownOnScreen([])
  }

  return (
    <div className="app">
      <Header />
      <Board params={params} onAdd={addSkillOnBoard} onDelete={deleteSkill} clearBoard={clearBoard}/>
      <JobList jobs={jobsShownOnScreen}/>
    </div>
  );
}

export default App;

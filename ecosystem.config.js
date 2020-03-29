module.exports = {
  apps: [
    {
      name: 'bw-dev',
      script: 'npm',
      args: 'run dev'
    },
    {
      name: 'bw-prod',
      script: 'npm',
      args: 'run start'
    },
    {
      name: 'bw-prod-cluster',
      script: 'npm',
      args: 'run start',
      instances: 'max',
      exec_mode: 'cluster'
    }
  ]
}

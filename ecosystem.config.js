module.exports = {
    apps: [{
        script: 'npm start'
    }],


    deploy : {
        production: {
            key: 'key.pen',
            user: 'ubuntu',
            host: '154.49.139.11',
            ref: 'origin/main',
            repo: 'https://github.com/Kursatkeskin96/my-portfolio.git',
            path: '/home/ubuntu',
            'pre-deploy-local': '',
            'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
            'ssh-options': 'ForwardAgent=yes'
        }
    }
}
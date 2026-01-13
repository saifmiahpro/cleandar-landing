module.exports = {
    apps: [
        {
            name: 'cleandar-landing',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/var/www/cleandar-landing',
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            },
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        }
    ]
};

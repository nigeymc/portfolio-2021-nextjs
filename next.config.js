const path = require('path');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        config.plugins.push(new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
        }))
        // Important: return the modified config
        return config
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `
        $grey-800: #343a40;
        $off-black: #262626;
        $primaryGreen: #0C3333;
        $secondaryGreen: #008C8E;
        $primaryWhite: #fff;
        $off-white: #F7F7F7;
        $lightGrey: #6c757d;
        $primary: $primaryGreen;
        $secondary: $secondaryGreen;   
        $yiq-contrasted-threshold: 205; 
        `,

    }
}

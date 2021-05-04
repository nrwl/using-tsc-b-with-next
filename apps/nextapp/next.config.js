// eslint-disable-next-line @typescript-eslint/no-var-requires

const withNx = require('@nrwl/next/plugins/with-nx');
const WebpackNxBuildCoordinationPlugin = require('../../dist/libs/plugin/src/lib/plugin').WebpackNxBuildCoordinationPlugin

module.exports = withNx({
    webpack: (config, {isServer}) => {
        if (process.argv[3].endsWith(':build')) return config
        if (isServer) return config
        return {
            ...config,
            plugins: [...config.plugins, new WebpackNxBuildCoordinationPlugin("tsc -b apps/nextapp/tsconfig.json", "libs")],
        };
    }
});
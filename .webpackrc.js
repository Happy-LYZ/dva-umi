const path = require('path')
export default {
    alias:{
        components:path.resolve(__dirname,'src/components'),
        utils:path.resolve(__dirname,'src/utils'),
        services:path.resolve(__dirname,'src/services'),
        models:path.resolve(__dirname,'src/models'),
        themes:path.resolve(__dirname,'src/themes')
    }
}

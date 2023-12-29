/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
    return [
        {
            source: '/api/submitForm',
            destination: '/src/api/submitForm'
        }
    ]
    }
}

module.exports = nextConfig

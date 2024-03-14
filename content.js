const base_url = "https://huggingface.co/papers/"

const regexPattern = new RegExp("https://huggingface.co/papers/\\d+\\.\\d+");
const regexResult = regexPattern.test(location.href)

if (regexResult){
    const arxiv_id = location.href.slice(base_url.length)
    const redirected_url = "https://arxiv.org/abs/" + arxiv_id
    window.location.replace(redirected_url)
} 

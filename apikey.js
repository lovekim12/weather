const config = {
    apikey : '2adc9641cf0514e2cf35500bb77f249f'
}




/*
apikey 숨기려면
1. apikey.js파일 만듦
const config = {
    apikey : '키입력'
}

2. html파일에 연결 
<script src="apikey.js"></script>

3. custom.js에서 
const api_key = config.apikey; 

4. touch .gitignore    //터미널에서 gitignore파일 생성
5. echo "apikey.js" >> .gitignore    //gitignore파일에 apikey.js 파일추가
6. cat .gitignore   //추적에서 제외
*/  
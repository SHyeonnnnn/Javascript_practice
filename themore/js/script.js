const postContainer=document.getElementById('posts-container');
const filter=document.getElementById('filter');
const loading=document.querySelector('.loader');

let limit=5;
let page=1;

showPosts();
// getPost();
async function getPost(){
    const res=await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}` //주소뒤에 가져올거 설정 (&중요)
    );
    const data=await res.json();
    return data;
};

//데이터 가져오기
/* showPosts(); */
async function showPosts(){
    const posts=await getPost();
    posts.forEach(post => {
        const postEl=document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML=`
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <div class="post-body">${post.body}</div>
            </div>
        `;
        postContainer.append(postEl);
    })
};

//loading                              물결무늬 애니메이션
/* showLoading(); */
function showLoading(){
    loading.classList.add('show');
    setTimeout(() => {
        loading.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts();
        },300);
    },1000);
};

//스크롤이벤트
window.addEventListener('scroll', () => {
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement; //destructuring 구조분해할당

    if(scrollTop + clientHeight >= scrollHeight){
        showLoading();
    };
});

//필터함수
function filterPosts(e){
    const val=e.target.value.toUpperCase();
    const posts=document.querySelectorAll('.post') //반복해서 들어올거기 때문에 All
    
    posts.forEach(post => {
        const title=post.querySelector('.post-title').innerText.toUpperCase();
        const body=post.querySelector('.post-body').innerText.toUpperCase();

        if(title.indexOf(val) > -1 || body.indexOf(val) > -1){
            post.style.display='flex';
        }else{
            post.style.display='none';
        };
    });
};
filter.addEventListener('input', filterPosts);
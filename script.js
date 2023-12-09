
function showInfo(event) {
    console.log("MOUSE CALLED");
    unHover(event);
    console.log(event.target);
    let infoDiv = document.createElement('div');
    let photoCountP = document.createElement('p');
    let postCountP = document.createElement('p');
    let commentCountP = document.createElement('p');

    let userId = event.target.getAttribute('userid'); //get User ID

    let albums = getAlbumbyId(userId);
    let photoCount = 0;
    for (let i = 0; i<albums.length; i++) {
        photoCount += getPhotosbyId(albums[i].id).length;
    }
    // getUserPhotos(userId);
    console.log(photoCount, userId);
    photoCountP.appendChild(document.createTextNode(photoCount))

    infoDiv.appendChild(photoCountP);
    infoDiv.appendChild(postCountP);
    infoDiv.appendChild(commentCountP);


    event.target.appendChild(infoDiv);
}

function unHover(event) {
    // console.log()
    // console.log(event.target.children);
    // for (let i = 1; i<event.target.children.length; i++) {
    //     event.target.removeChild(event.target.children[i]);
    // }
    event.target.innerHTML = "";
    setUsers();
}


// async function getUserPhotos(userId) {
//     const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    
//     let albums = await response.json();

//     for (let i = 0; i<photos.length; i++) {

//         console.log(photos[i].id)
//     }
//     photos = photos.filter(element => {
//         return element.id==userId;
//     });

//     console.log(photos);
// }


async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return users;
}

async function getUserbyId(userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    const user = await response.json();
    return user;
}

async function getAlbumbyAlbumId(albumId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/?id="+albumId);
    const album = await response.json();
    return album;
}

async function getAlbums(userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums?userId="+userId);
    const albums = await response.json();
    return albums;
}

async function getPhotos(albumId) {
     const response = await fetch("https://jsonplaceholder.typicode.com/photos?albumId="+albumId);
     const photos = await response.json();
     return photos;
}

async function getPosts(userId) {
     const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId);
     const posts = await response.json();
     return posts;
}

async function getComments(postId) {
     const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+postId);
     const comments = await response.json();
     return comments;
}







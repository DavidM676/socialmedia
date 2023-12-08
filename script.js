function open(event) {

    let userID = event.target.getAttribute('userid');
    console.log("OPENING", userID);
    window.location = '/user.html?userid='+userID;


    // const urlParams = new URLSearchParams(window.location.search);

    // urlParams.set('userid', userID);

    // window.location.search = urlParams;
}

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

async function getAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await response.json();
    return albums;
}

// async function getPhotos() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/photos");
//     const photos = await response.json();
//     return photos;
// }


function getAlbumbyId(userId, albums) {

    
    let albumLst = [];
    for (let i = 0; i<albums.length; i++) {
        if (albums[i].userId==userId) {
            albumLst.push(albums[i]);
        }
    }
    console.log("RETURNING", userId, albumLst);
    return albumLst;
}

// function getPhotosbyAlbumId(albumId) {
//     let photoLst = [];
//     for (let i = 0; i<photos.length; i++) {
//         if (photos[i].albumId==albumId) {
//             photoLst.push(photos[i]);
//         }
//     }
//     return photoLst;
// }

// async function loadData() {
//     albums = await getAlbums(); 
//     photos = await getPhotos();
// }

async function setUsers() {
    const grid = document.getElementById("usersDiv");
    //load all the data from the server


    const users = await getUsers();
    for (let i = 0; i<users.length; i++) {
        const user = users[i];

        let thisDiv = document.createElement('div');
        // thisDiv.addEventListener("mouseenter", showInfo, once=true);
        // thisDiv.addEventListener("mouseout", unHover, once=true);
        thisDiv.addEventListener("click", open);
        thisDiv.setAttribute("userId", user.id); //set user id 


        thisDiv.className = "indivUser";

        let name = document.createElement('p');

        name.innerHTML=user.name;

        thisDiv.appendChild(name);
        grid.appendChild(thisDiv);
        
    }
}
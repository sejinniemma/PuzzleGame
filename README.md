# Puzzle🧩

## Main function
1. display grid template
2. drag event
3. nextSibling,previousSibling
4. before(),after() method

https://user-images.githubusercontent.com/80943394/135032931-b639f2d7-0188-4afa-b706-be42e49aac8b.mov


### display grid

- I made puzzle using display grid template
- I made 16 images of each 'li' tag
- CSS : adjust their location(16 images)
- as if it looks like they are puzzle pieces with diffrent image
<br>
<img width="490" alt="스크린샷 2021-09-28 오후 3 04 49" src="https://user-images.githubusercontent.com/80943394/135033951-425acd9d-adaf-4e74-babd-878a038f9254.png">

<img width="490" alt="스크린샷 2021-09-28 오후 3 05 04" src="https://user-images.githubusercontent.com/80943394/135033923-c51022b4-eee4-4741-aab1-6eb984f921ef.png">

### make puzzle list + shuffle puzzle in Javascript 
1. create tiles (li tags)
- I made array using Array().fill().forach() instead of for loop
- I add data-index info to check if origin index and data-index attribute is same
- I pushed '16 li tags' into tempArray[] 
- using this array I can make logic in function shuffle()


2. shuffle puzzles

- I made randomIndex
- while loop: make new shuffle puzzle as much as puzzle length
- create new shuffle puzzle by switching orinial index and randomIndex and return array

<img width="832" alt="스크린샷 2021-09-28 오후 3 41 19" src="https://user-images.githubusercontent.com/80943394/135036794-d124ad47-6029-4ab0-8423-5671146d2548.png">



### setting game

- appendchild : push each of puzzle pieces into their parent(container) using foreach

<img width="737" alt="스크린샷 2021-09-28 오후 3 42 50" src="https://user-images.githubusercontent.com/80943394/135036785-d190a062-0346-4947-befe-cc46075aa88b.png">


### drag event

1. drag start & drag over

- I made 'dragged object' to save 'drag start information' and can be used outside(drag drop event)
- dragged.index : I found Index information through parentNode's childNodes
- 💥 but childNodes was an object not an array
-  so I made it array using literal array []
-  and put each of it as element [...]
- to prevent bug, gave preventDefault() when dragover

<img width="782" alt="스크린샷 2021-09-28 오후 4 15 38" src="https://user-images.githubusercontent.com/80943394/135040943-b9fffbec-a27a-4981-8716-59ece0d61273.png">
<img width="284" alt="스크린샷 2021-09-28 오후 4 15 57" src="https://user-images.githubusercontent.com/80943394/135040955-16fa3c38-d923-4a18-9087-c442a76153b0.png">

2. drag drop

- I also made droped information to compare dragstart information
- we're doing somthing when obg.className and dragged.class is not same (when a peice of puzzle is droppend without their original position) 
- make logic using before(),after() method : when dragged index is more big then droppendIndex,move it to the front of obj 
- bug💥 : I wanted to swtich only for the two target (dragged.el and obj),so I saved their nextSiblings and using before method.
- bug💥 : but last 'li' has no nextSbling so in case of last piece, I saved previusSibling instead of nextSibling
 

<img width="1022" alt="스크린샷 2021-09-28 오후 4 30 03" src="https://user-images.githubusercontent.com/80943394/135042970-d3051905-b81b-42b2-8e56-5420deb5203c.png">

### check status

- I made 'unMatchedList' using filter so I can compare origin index and data-index
- if 'unMatchedList === 0', it means all data-index and index are same 

<img width="1216" alt="스크린샷 2021-09-28 오후 4 46 01" src="https://user-images.githubusercontent.com/80943394/135045168-20795730-c539-4945-b30e-3924e68b1219.png">


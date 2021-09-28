# Puzzle🧩

## Main function
1. display grid template
2. drag event
3. nextSibling,previousSibling
4. before(),after() method

https://user-images.githubusercontent.com/80943394/135032931-b639f2d7-0188-4afa-b706-be42e49aac8b.mov


### display grid

- I made puzzle using display grid template
- I made 16 images of each li tag
- CSS : adjust their location(16 images) so that it can be showed only one part 
- as if it looks like they are puzzle pieces with diffrent image
<br>
<img width="490" alt="스크린샷 2021-09-28 오후 3 04 49" src="https://user-images.githubusercontent.com/80943394/135033951-425acd9d-adaf-4e74-babd-878a038f9254.png">

<img width="490" alt="스크린샷 2021-09-28 오후 3 05 04" src="https://user-images.githubusercontent.com/80943394/135033923-c51022b4-eee4-4741-aab1-6eb984f921ef.png">

### make puzzle list + shuffle puzzle in Javascript 
1. create tiles
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

- appendchild : push each of creat puzzle pieces into their parent(container) using foreach

<img width="737" alt="스크린샷 2021-09-28 오후 3 42 50" src="https://user-images.githubusercontent.com/80943394/135036785-d190a062-0346-4947-befe-cc46075aa88b.png">

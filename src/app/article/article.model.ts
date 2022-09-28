export class Article {
  
    votes: number;
    title: string;
    link: string;
    
      constructor( title: string, link: string, votes?: number) { 
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    
      }


      
    votedUp() {
        this.votes += 1;
        return false;
    }

    votedDown() {
        this.votes -= 1;
        return false;
    }


    domain(): string{
       try{

        const domanAndPath : string = this.link.split('//')[1];
        return domanAndPath.split('/')[0];
        
        } catch (err){
            return 'null';
        }
    }

    }
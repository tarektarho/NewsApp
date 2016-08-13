function newsCard() {
  return {
    restric : 'EA',
    scope: {
      news: '='
    },
      template: `<div class="row" >
               <div class="text-center">
               <div class="col s12">
               
                 <div class="card grey lighten-3">
                   
                   <img ng-src="{{ new.multimedia[3].url }}"/>
                   
                     <span class="card-title">{{ news.city }}</span>
                   <p>{{ news.Section }}<p>
                   
                   
                         <p> {{ news.Title }}</p>
                         <p> {{ news.Abstract }}</p>
                         
                         <p> {{ news.ItemType }}</p>
                        
                         <p> {{ news.Director }}</p>
                         
                         <p> {{news.Awards }}</p>
                         
                         <p> {{news.Type}}</p>
                         
                         <p> {{news.Rated}}</p>
                         
                         <p> {{news.Runtime }}</p>
                         
                         
                    </div>
                   </div>
                 </div>
               
               
             </div>`
    };
}


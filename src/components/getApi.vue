 <script>
 export default {

 
 methods: {
        getApi: () => {
            let url = "https://api.propublica.org/congress/v1/113/senate/members.json";
            let myApi = {
                method: "GET",
                headers: ({
                    'X-API-Key': '6t6gVJAF4QLWDZFDyRumlsNAA9udfjvQtouMvr2R'
                }),
            };

            fetch(url, myApi)
                .then(function (response) {
                    return response.json()

                })
                .then(function (dataFinal) {
                    console.log(dataFinal);
                    myvue.politics = dataFinal.results[0].members
                })

                .catch(function (error) {
                    console.log(error)
                })
        }
    }
    

}


// mounted () {
//     axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.info = response))
//   }
 </script>
  
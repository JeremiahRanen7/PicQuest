let myForm = document.getElementById("myForm")
    myForm.addEventListener("submit", getImages)

    function getImages(e) {
        e.preventDefault()

        let search = document.getElementById("search").value
        let url = `https://api.unsplash.com/search/photos?query=${search}&client_id=9d87s8R2eUCJMRw4hTTZg_VEdITJbFEw_Wdp7RFaEME&per_page=50`

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                document.getElementById("result").innerHTML = ''
                if (data.results.length === 0) {
                    document.getElementById("result").innerHTML = "<p>No results found.</p>"
                } else {
                    data.results.forEach((image) => {
                        document.getElementById("result").innerHTML += `
                        <img src="${image.urls.regular}" alt="${image.alt_description}" style="margin: 10px;">
                        `
                    })
                }

            })
            .catch((error) => {
                console.log("Error while fetching....", error)
            })
    }
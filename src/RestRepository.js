import axios from "axios";

export default RestRepository;

/**
 * Here are all the backend requests
 */
function RestRepository() {
    

    /**
     * Get product list from backend
     */
    this.getReactReleases = async function (filterCriteria) {

        return await axios.get('http://localhost:8081/reactRelease/releases', {
            auth: {
              username: 'admin',
              password: '123'
            },
            params: JSON.parse(JSON.stringify(filterCriteria)),
            headers: {
                'Content-Type': 'application/json',
            }
          })
            .then(res => {return res.data})
            .catch(err => console.log(err));
    }

   
}
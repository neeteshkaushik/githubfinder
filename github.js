class GitHub {
  constructor(){
    this.client_id = '767849e8ebc39c7bef75';
    this.client_secret = '68698f8e3efe4f65745b67b7a695c012545b21af';
    this.repos_count=5;
    this.repos_sort='created: asc';

  }

  async getUser(user){
    const profileresponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileresponse.json();

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const repos = await repoResponse.json();
    return{
      profile,
      repos//eqivalent to profile:profile
    }
  }
}
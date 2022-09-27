export function getNewsTopHeadlines(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=203c7561a4f14df8af0d1972bdc36b9a&page=' + pageNumber
    );
}


export function getNewsBusiness(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}

export function getNewsEntertainment(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}

export function getNewsHealth(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}

export function getNewsScience(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}

export function getNewsSports(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}

export function getNewsTechnology(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}


export function getKindItem(pageNumber) {
    return fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category='+pageNumber.category+'&apiKey=203c7561a4f14df8af0d1972bdc36b9a&pageSize='+pageNumber.pageSize+'&page=' +pageNumber.pageNumber
    );
}



const recreationalElement = document.getElementById('recreationalElement');
let activityList = [];

const displayActivities = (activities) => {
  reset();
  activities.forEach((activity) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = activity.activityName;
    article.appendChild(h3);
    recreationalElement.appendChild(article);
  });
};

const getActivities = async () => {
  const response = await fetch('https://bored-api.appbrewery.com/filter?type=recreational');
  const data = await response.json();
  activityList = data.activities;
  displayActivities(activityList);
};

const reset = () => {
  recreationalElement.innerHTML = '';
};

const sortBy = (activities) => {
  reset();
  const filter = document.getElementById('sortBy').value;

  switch (filter) {
    case 'kidFriendly':
      displayActivities(activities.filter((activity) => activity.kidFriendly === true));
      break;
    case 'minutes':
      displayActivities(activities.filter((activity) => activity.duration === 'minutes'));
      break;
    default:
      displayActivities(activities);
  }
};

document.getElementById('sortBy').addEventListener('change', () => {
  sortBy(activityList);
});

getActivities();

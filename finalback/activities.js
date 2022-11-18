let act = [];

export function getAcivity() {
  return actvities;
}

export function addActivity(act) {
  activities.push(act);
}

export function deleteActivity(index) {
  activities = activities.filter((_, currIndex) => {
    return index != currIndex;
  });
}
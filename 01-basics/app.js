const inputElement = document.getElementById('goal');
const addGoalElement = document.getElementById('addGoal');
const goalsListElement = document.getElementById('goalsList');

addGoalElement.addEventListener('click', () => {
  goal = inputElement.value;
  
  if(!goal.trim() && goal.trim() == '') {
    return;
  }

  const newGoalItem = document.createElement('li');
  newGoalItem.textContent = goal;
  goalsListElement.appendChild(newGoalItem);

  inputElement.value = '';

});

document.querySelectorAll('.skill').forEach(skill => {
  const content = skill.querySelector('.skill-content');

  // Listen on the entire skill card
  skill.addEventListener('click', () => {
    // Close other skills
    document.querySelectorAll('.skill.open').forEach(openSkill => {
      if (openSkill !== skill) {
        openSkill.classList.remove('open');
        openSkill.querySelector('.skill-content').style.maxHeight = null;
      }
    });

    // Toggle this skill
    skill.classList.toggle('open');

    if (skill.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});

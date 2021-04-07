function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Are you hungry?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
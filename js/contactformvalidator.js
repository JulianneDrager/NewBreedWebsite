function Form1_Validator(theForm)
{

  if (theForm.first.value == "")
  {
    alert("Please enter a value for the \"First Name\" field.");
    theForm.first.focus();
    return (false);
  }

  if (theForm.last.value == "")
  {
    alert("Please enter a value for the \"Last Name\" field.");
    theForm.last.focus();
    return (false);
  }

//   if (theForm.phone.value == "")
//   {
//     alert("Please enter a value for the \"Phone\" field.");
//     theForm.phone.focus();
//     return (false);
//   }

  if (theForm.email.value == "")
  {
    alert("Please enter a value for the \"Email\" field.");
    theForm.email.focus();
    return (false);
  }

//   if (theForm.best_time_to_contact.value == "")
//   {
//     alert("Please enter a value for the \"Best Time To Contact\" field.");
//     theForm.best_time_to_contact.focus();
//     return (false);
//   }


//   if (theForm.address.value == "")
//   {
//     alert("Please enter a value for the \"Address\" field.");
//     theForm.address.focus();
//     return (false);
//   }

//   if (theForm.city.value == "")
//   {
//     alert("Please enter a value for the \"City\" field.");
//     theForm.city.focus();
//     return (false);
//   }


//   if (theForm.state.selectedIndex < 0)
//   {
//     alert("Please select one of the \"State\" options.");
//     theForm.state.focus();
//     return (false);
//   }

//   if (theForm.state.selectedIndex == 0)
//   {
//     alert("The first \"State\" option is not a valid selection.  Please choose one of the other options.");
//     theForm.state.focus();
//     return (false);
//   }

//   if (theForm.zip_code.value == "")
//   {
//     alert("Please enter a value for the \"Zip Code\" field.");
//     theForm.zip_code.focus();
//     return (false);
//   }

//   if (theForm.zip_code.value.length > 10)
//   {
//     alert("Invalid length in the \"Zip Code\" field.  Please re-enter.");
//     theForm.zip_code.focus();
//     return (false);
//   }

//   if (theForm.source.selectedIndex == 0)
//   {
//     alert("Please choose one of the options for how you heard about us.");
//     theForm.source.focus();
//     return (false);
//   }

  return (true);
}
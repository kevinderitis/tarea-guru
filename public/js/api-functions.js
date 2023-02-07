const UNIT_PRICE = 499;
let questionNumber = 2;

      function addQuestion() {
        let price = parseInt(document.getElementById('totalPrice').textContent.replace('$', '').replace('ARS', ''));
        price += UNIT_PRICE;
        document.getElementById('totalPrice').textContent = `$${price}ARS`;

        let container = document.getElementById("questionsContainer");
        let label = document.createElement("label");
        label.innerHTML = "Pregunta " + questionNumber + ":";
        container.appendChild(label);
        let input = document.createElement("input");
        input.setAttribute("class", "py-3 px-3 w-100 rounded")
        input.type = "text";
        input.name = "question";
        input.style = "border-color:green";
        container.appendChild(input);
        questionNumber++;
      }

      function removeQuestion() {
        let price = parseInt(document.getElementById('totalPrice').textContent.replace('$', '').replace('ARS', ''));
             
        let container = document.getElementById("questionsContainer");
        let children = container.children;
        let numChildren = children.length;
      
        if (numChildren > 3) {
          let lastInput = children[numChildren - 1];
          let secondLastInput = children[numChildren - 2];
          container.removeChild(secondLastInput);
          container.removeChild(lastInput);
          price -= UNIT_PRICE;
          document.getElementById('totalPrice').textContent = `$${price}ARS`;
          questionNumber--
        }
      }



      function submitForm() {
        let questions = [];
        let inputs = document.getElementsByName("question");
        for (let i = 0; i < inputs.length; i++) {
          questions.push(inputs[i].value);
        }
        axios.post("/homework", { questions: questions })
          .then(function (response) {
            console.log(response.data);
            window.location.href = response.data.redirectURL;
          })
          .catch(function (error) {
            console.error(error);
          });
      }

      const sendUser = async () => {
        let user = document.getElementById("nameForm").value
        let email = document.getElementById("emailForm").value
        let userData = {
            user, 
            email
        }
        try {
           await axios.post('/user', userData);
           window.location.href = '/form.html'
        } catch (error) {
            console.log(error)
        }
       
    
    }
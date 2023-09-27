            //Javascript Execution Context
        //-->Global EC->this stores the execution context of 
        //-->Function EC
        //-->Eval EC

        //Phases of js code execution
        //-->Memory allocation phase
        //-->Execution phase

        
        function one(){
            console.log("one")
            two()
        }
        function two() {
            console.log("two")
            three()
        }
        function three(){
            console.log("three")
        }
        
        one()
        two()
        three()

        
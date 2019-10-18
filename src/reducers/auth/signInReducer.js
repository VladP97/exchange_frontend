const InitailState = {
        formData: [
                {
                        name: "email",
                        type: "text",
                        placeholder: "Email",
                        vaild: false
                },
                {
                        name: "password",
                        type: "text",
                        placeholder: "Password",
                        vaild: false
                },

        ]
}

export default function (state = InitailState, action) {
        switch (action.type) {
                default:
                        return state;
        }
}

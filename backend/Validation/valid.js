
const zod = require('zod');

const userSignupBody = zod.object({
    name: zod.string().min(1, "Name is required").max(50, "Name is too long"),
    lastName: zod.string().min(1, "Last name is required").max(50, "Last name is too long"),
    phone: zod.string()
        .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    email: zod.string().email("Invalid email address"),
    location: zod.string().min(1, "Location is required").max(100, "Location is too long"),
    password: zod.string().min(8, "Password must be at least 8 characters long").max(100, "Password is too long")
});

const userSigninBody = zod.object({
    email: zod.string().email("Invalid email address").optional(),
    phone: zod.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits").optional(),
    password: zod.string().min(8, "Password must be at least 8 characters long")
})

const adminSignupBody=zod.object({
    name:zod.string().min(1, "Name is required").max(50, "Name is too long"),
    email:zod.string().email("Invalid email address"),
    password: zod.string().min(8, "Password must be at least 8 characters long")
})

const adminSigninBody=zod.object({
    email:zod.string().email("Invalid email address"),
    password: zod.string().min(8, "Password must be at least 8 characters long")
})

module.exports={userSignupBody,userSigninBody,adminSigninBody,adminSignupBody}
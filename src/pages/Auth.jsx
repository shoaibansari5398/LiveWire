import React, { useState } from "react";
import { TabsList, Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleLogin = async () => { };
	const handleSignup = async () => { };

	return (
		<div className="h-[100vh] w-[100vw] flex items-center justify-center">
			<div className="h-[80vh] bg-white border-2 text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid">
				<div className="flex flex-col items-center justify-center gap-10">
					<div className="flex items-center justify-center flex-col gap-3">
						<div className="flex items-center justify-center">
							<h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
						</div>
						<p className="font-medium text-center">Fill in the details to get started with the best chat app</p>
					</div>
					<div className="flex items-center justify-center w-full">
						<Tabs classNamew="w-3/4">
							<TabsList className="rounded-none bg-transparent w-full">
								<TabsTrigger
									value="login"
									className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all	duration-300"
								>
									Login
								</TabsTrigger>
								<TabsTrigger
									value="signup"
									className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all	duration-300"
								>
									Signup
								</TabsTrigger>
							</TabsList>
							<TabsContent value="login" className="flex flex-col gap-5 mt-10">
								<Input
									placeholder="Email"
									type="email"
									className="rounded-full p-6"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									placeholder="Password"
									type="password"
									className="rounded-full p-6"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Button className="rounded-full p-6" onclick={handleLogin}>Login</Button>
							</TabsContent>
							<TabsContent value="signup" className="flex flex-col gap-5">
								<Input
									placeholder="Email"
									type="email"
									className="rounded-full p-6"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									placeholder="Password"
									type="password"
									className="rounded-full p-6"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<Input
									placeholder="Confirm Password"
									type="password"
									className="rounded-full p-6"
									value={confirmPassword}
									onChange={(e) => setConfirmPassword(e.target.value)}
								/>
								<Button className="rounded-full p-6" onclick={handleSignup}>Signup</Button>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;

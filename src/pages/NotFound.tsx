
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomButton from "@/components/ui/CustomButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        <section className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="inline-block p-6 rounded-full bg-primary/10 mb-6">
              <svg
                className="h-12 w-12 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! We couldn't find the page you're looking for.
            </p>
            <CustomButton to="/" size="lg">
              Return to Home
            </CustomButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;

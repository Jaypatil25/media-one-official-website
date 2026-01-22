const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Media One Logo Animation */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-secondary rounded-full animate-spin mx-auto" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="heading-display text-2xl text-foreground">Media One</h2>
          <p className="text-muted-foreground animate-pulse">Loading your entertainment experience...</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
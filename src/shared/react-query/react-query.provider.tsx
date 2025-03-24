import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

function ReactQueryProvider(props: IReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;

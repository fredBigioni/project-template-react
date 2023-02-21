LOCAL -> VITE_API_URL=https://localhost:7035/api
DESA ->  VITE_API_URL=https://home.solutica.com.ar:883/trackerbk/api
PROD ->  VITE_API_URL=https://home.solutica.com.ar/trackerbk/api

dotnet ef dbcontext scaffold "User ID=desa;password=q1w2e3R4$;server=solsrv20.solutica,1683;Database=SoluticaTimeTracker;Encrypt=False" Microsoft.EntityFrameworkCore.SqlServer -o Models --context-dir "Helpers" -c "DataContext" -f
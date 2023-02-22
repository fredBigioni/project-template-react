
URL del proyecto actual https://github.com/fredBigioni/project-template-react.git

Para crear un nuevo repositorio
echo " # nombre del proyecto" >> README.md
git init
git add README.md
git commit -m "First Commit"
git branch -M main
git remote add origin (url github del proyecto actual)
git push -u origin main

or subirlo a un repositorio existente
git remote add origin https://github.com/fredBigioni/project-template-react.git
git branch -M main
git push -u origin main

LOCAL -> VITE_API_URL=https://localhost:7035/api
DESA ->  VITE_API_URL=https://home.solutica.com.ar:883/trackerbk/api
PROD ->  VITE_API_URL=https://home.solutica.com.ar/trackerbk/api

dotnet ef dbcontext scaffold "User ID=desa;password=q1w2e3R4$;server=solsrv20.solutica,1683;#Database=SoluticaTimeTracker;Encrypt=False" Microsoft.EntityFrameworkCore.SqlServer -o Models --context-dir #"Helpers" -c "DataContext" -f
 
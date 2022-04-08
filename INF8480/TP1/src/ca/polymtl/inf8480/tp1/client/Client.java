package ca.polymtl.inf8480.tp1.client;

import java.rmi.AccessException;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.lang.Math;

import ca.polymtl.inf8480.tp1.shared.ServerInterface;

public class Client {
	private int size;

	public static void main(String[] args) {
		String distantHostname = null;
		int power = 0;

		if (args.length > 0) {
			distantHostname = args[0];
		}

		if (args.length > 1) {
			power = Integer.valueOf(args[1]);
		}

		Client client = new Client(distantHostname, power);
		client.run();
	}

	FakeServer localServer = null; // Pour tester la latence d'un appel de
									// fonction normal.
	private ServerInterface localServerStub = null;
	private ServerInterface distantServerStub = null;

	public Client(String distantServerHostname, int power) {
		super();

		if (System.getSecurityManager() == null) {
			System.setSecurityManager(new SecurityManager());
		}

		localServer = new FakeServer();
		localServerStub = loadServerStub("127.0.0.1");

		if (distantServerHostname != null) {
			distantServerStub = loadServerStub(distantServerHostname);
		}

		size = (int) Math.pow(10, power);
	}

	private void run() {
		appelNormal();

		if (localServerStub != null) {
			appelRMILocal();
		}

		if (distantServerStub != null) {
			appelRMIDistant();
		}
	}

	private ServerInterface loadServerStub(String hostname) {
		ServerInterface stub = null;

		try {
			Registry registry = LocateRegistry.getRegistry(hostname);
			stub = (ServerInterface) registry.lookup("server");
		} catch (NotBoundException e) {
			System.out.println("Erreur: Le nom '" + e.getMessage() + "' n'est pas défini dans le registre.");
		} catch (AccessException e) {
			System.out.println("Erreur: " + e.getMessage());
		} catch (RemoteException e) {
			System.out.println("Erreur: " + e.getMessage());
		}

		return stub;
	}

	private void appelNormal() {
		byte[] load = new byte[size];

		long start = System.nanoTime();
		int result = localServer.execute(load);
		long end = System.nanoTime();

		System.out.println("Temps écoulé appel normal: " + (end - start) + " ns");
		System.out.println("Résultat appel normal: " + result);
	}

	private void appelRMILocal() {
		byte[] load = new byte[size];

		try {
			long start = System.nanoTime();
			int result = localServerStub.execute(load);
			long end = System.nanoTime();

			System.out.println("Temps écoulé appel RMI local: " + (end - start) + " ns");
			System.out.println("Résultat appel RMI local: " + result);
		} catch (RemoteException e) {
			System.out.println("Erreur: " + e.getMessage());
		}
	}

	private void appelRMIDistant() {
		byte[] load = new byte[size];

		try {
			long start = System.nanoTime();
			int result = distantServerStub.execute(load);
			long end = System.nanoTime();

			System.out.println("Temps écoulé appel RMI distant: " + (end - start) + " ns");
			System.out.println("Résultat appel RMI distant: " + result);
		} catch (RemoteException e) {
			System.out.println("Erreur: " + e.getMessage());
		}
	}
}
